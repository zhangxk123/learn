{
  "type": "Program",
  "start": 0,
  "end": 18,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 18,
      "expression": {
        "type": "MemberExpression",
        "start": 0,
        "end": 17,
        "object": {
          "type": "Identifier",
          "start": 0,
          "end": 3,
          "name": "arr"
        },
        "property": {
          "type": "BinaryExpression",
          "start": 4,
          "end": 16,
          "left": {
            "type": "MemberExpression",
            "start": 4,
            "end": 14,
            "object": {
              "type": "Identifier",
              "start": 4,
              "end": 7,
              "name": "arr"
            },
            "property": {
              "type": "Identifier",
              "start": 8,
              "end": 14,
              "name": "length"
            },
            "computed": false,
            "optional": false
          },
          "operator": "-",
          "right": {
            "type": "Literal",
            "start": 15,
            "end": 16,
            "value": 1,
            "raw": "1"
          }
        },
        "computed": true,
        "optional": false
      }
    }
  ],
  "sourceType": "module"
}