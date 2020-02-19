// getProps.ts
import * as ts from "typescript";

function isReactComponent(baseType: ts.Type) {
  if (baseType == null) return false;

  let baseTypeSymbol = baseType.getSymbol();
  if (baseTypeSymbol == null) return false;
  // Base type is named Component
  if (baseTypeSymbol.getName() !== "Component") return false;

  var declarations = baseTypeSymbol.declarations;
  if (declarations == null) return false;

  // With the declartion beeing located inside the react module
  return declarations.some(
    r => r.getSourceFile().fileName.indexOf("node_modules/@types/react") !== -1
  );
}

export default function compile(
  fileNames: string[],
  options: ts.CompilerOptions
): void {
  let program = ts.createProgram(fileNames, options);
  let sample = program.getSourceFile("sample.ts");
  if (sample == null) return;

  let checker = program.getTypeChecker();
  // Get declarations inside the file
  let list = sample.getChildAt(0) as ts.SyntaxList;

  for (let i = 0, n = list.getChildCount(); i < n; i++) {
    let clazz = list.getChildAt(i);
    // if the child is a class
    if (!ts.isClassDeclaration(clazz)) continue;

    // Get the heritage classes of the class
    let heritageClauses = clazz.heritageClauses;
    if (heritageClauses == null) continue;

    // Iterate the heritage clauses
    for (const heritageClause of heritageClauses) {
      // Only take the extends clauses
      if (heritageClause.token !== ts.SyntaxKind.ExtendsKeyword) continue;

      // Get the type of the extends
      let extendsType = heritageClause.types[0];
      // If the base type is React.Component
      if (isReactComponent(checker.getTypeFromTypeNode(extendsType))) {
        // Get the type argument of the expression
        var propType = extendsType.typeArguments![0];

        let type = checker.getTypeFromTypeNode(propType);
        console.log(`The name of props is ${type.getSymbol()!.getName()}`);
        var props = type.getProperties();
        for (let prop of props) {
          console.log(`  Contains prop: ${prop.getName()}`);
        }
      }
    }
  }
}
