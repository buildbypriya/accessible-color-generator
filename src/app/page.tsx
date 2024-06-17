"use client";

import { useState } from "react";
import styles from "./page.module.css";
import { Box, TextField, Button } from "@radix-ui/themes";
import chroma from "chroma-js";

export default function Home() {
  const [generateColor, setGenerateColor] = useState("");
  const [fontColor, setFontColor] = useState("#2d2d2d");

  const [colorObject, setColorObject] = useState({
    hover: "",
    default: "",
    active: "",
    fontColor: "#2d2d2d",
  });
  const generateHandler = () => {
    if (chroma.valid(generateColor)) {
      const darkenColor = chroma(generateColor).darken(2).hex();
      const brightenColor = chroma(generateColor).brighten(0.9).hex();
      setColorObject((prevColorObject) => ({
        ...prevColorObject,
        hover: brightenColor,
        default: chroma(generateColor).hex(),
        active: darkenColor,
      }));
    }
  };

  const calculateContrast = (color1: string, color2: string) => {
    if (chroma.valid(color1) && chroma.valid(color2)) {
      return chroma.contrast(color1, color2);
    }
    return 0;
  };

  const isAccessible = (
    contrastRatio: number,
    level = "AA",
    isLargeText = false
  ) => {
    if (level === "AA") {
      return isLargeText ? contrastRatio >= 3 : contrastRatio >= 4.5;
    } else if (level === "AAA") {
      return isLargeText ? contrastRatio >= 4.5 : contrastRatio >= 7;
    } else {
      throw new Error("Invalid accessibility level");
    }
  };

  const isValidHexColor = (color: string): boolean => {
    return /^#([0-9A-F]{6}|[0-9A-F]{3})$/i.test(color);
  };

  const fontColorChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFontColor = e.target.value;
    setFontColor(newFontColor);
    if (isValidHexColor(newFontColor) && chroma.valid(newFontColor)) {
      setColorObject((prevColorObject) => ({
        ...prevColorObject,
        fontColor: newFontColor,
      }));
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.colorGeneratorWrapper}>
        <div className={styles.colorGenerate}>
          <div className={styles.colorInput}>
            <label htmlFor="color">Color:</label>
            <Box maxWidth="250px">
              <TextField.Root
                size="3"
                placeholder="Color…"
                value={generateColor}
                onChange={(e) => setGenerateColor(e.target.value)}
              />
            </Box>
          </div>
          <div className={styles.colorInput}>
            <label htmlFor="text-color">Font color:</label>
            <Box maxWidth="250px">
              <TextField.Root
                size="3"
                placeholder="font color…"
                value={fontColor}
                onChange={fontColorChangeHandler}
              />
            </Box>
          </div>
          <Button
            style={{ width: "100%" }}
            variant="solid"
            size="3"
            onClick={generateHandler}
          >
            Generate color
          </Button>
        </div>
      </div>

      {!!colorObject.default && chroma.valid(colorObject.fontColor) && (
        <div className={styles.colorTest}>
          <div className={styles.titles}>
            <p>Color Effect and Accessibility Table</p>
            <div className={styles.tableContainer}>
              <table className={styles.colorTable}>
                <thead>
                  <tr>
                    <th>Color Effect</th>
                    <th>Background Color</th>
                    <th>Color Code</th>
                    <th>AA Compliance</th>
                    <th>AAA Compliance</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Hover / Focus</td>
                    <td style={{ background: colorObject.hover }}>
                      <span
                        className={styles.colorCode}
                        style={{ color: fontColor }}
                      >
                        Hover / Focus
                      </span>
                    </td>
                    <td>{colorObject.hover}</td>
                    <td>
                      {isAccessible(
                        calculateContrast(colorObject.hover, fontColor)
                      )
                        ? "Pass"
                        : "Fail"}
                    </td>
                    <td>
                      {isAccessible(
                        calculateContrast(colorObject.hover, fontColor),
                        "AAA"
                      )
                        ? "Pass"
                        : "Fail"}
                    </td>
                  </tr>
                  <tr>
                    <td>Default</td>
                    <td style={{ background: colorObject.default }}>
                      <span
                        className={styles.colorCode}
                        style={{ color: fontColor }}
                      >
                        Default
                      </span>
                    </td>
                    <td>{colorObject.default}</td>
                    <td>
                      {isAccessible(
                        calculateContrast(colorObject.default, fontColor)
                      )
                        ? "Pass"
                        : "Fail"}
                    </td>
                    <td>
                      {isAccessible(
                        calculateContrast(colorObject.default, fontColor),
                        "AAA"
                      )
                        ? "Pass"
                        : "Fail"}
                    </td>
                  </tr>
                  <tr>
                    <td>Active</td>
                    <td style={{ background: colorObject.active }}>
                      <span
                        className={styles.colorCode}
                        style={{ color: fontColor }}
                      >
                        Active
                      </span>
                    </td>
                    <td>{colorObject.active}</td>
                    <td>
                      {isAccessible(
                        calculateContrast(colorObject.active, fontColor)
                      )
                        ? "Pass"
                        : "Fail"}
                    </td>
                    <td>
                      {isAccessible(
                        calculateContrast(colorObject.active, fontColor),
                        "AAA"
                      )
                        ? "Pass"
                        : "Fail"}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
