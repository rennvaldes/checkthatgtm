import nextConfig from "eslint-config-next";

const eslintConfig = [
  ...nextConfig,
  {
    ignores: ["tmp/**"],
  },
  {
    rules: {
      "react/no-unescaped-entities": [
        "error",
        {
          forbid: [
            { char: "'", alternatives: ["&apos;"] },
            { char: "\"", alternatives: ["&quot;"] },
            { char: ">", alternatives: ["&gt;"] },
            { char: "}", alternatives: ["&#125;"] },
          ],
        },
      ],
      "@next/next/no-img-element": "off",
      // Disable new strict rules from ESLint 9 / eslint-config-next 16
      "react-hooks/refs": "off",
      "react-hooks/static-components": "off",
      "react-hooks/immutability": "off",
      "react-hooks/preserve-manual-memoization": "off",
      "react-compiler/react-compiler": "off",
      "react-hooks/set-state-in-effect": "off",
      "import/no-anonymous-default-export": "off",
    },
  },
];

export default eslintConfig;
