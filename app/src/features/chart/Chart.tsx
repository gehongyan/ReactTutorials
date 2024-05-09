import { Column } from '@ant-design/plots';
import { useState } from "react";
import type { CommonConfig } from "@ant-design/plots/es/interface";
import type { ColumnOptions } from "@ant-design/plots/es/core";

function Chart() {

  const getTheme = (): string => {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "classicDark"
      : "classic";
  }

  const [theme, setTheme] = useState(getTheme());

  const [config,] = useState<CommonConfig<ColumnOptions>>({
    data: {
      type: "fetch",
      value: "https://render.alipay.com/p/yuyan/180020010001215413/antd-charts/column-column.json",
    },
    xField: "letter",
    yField: "frequency",
    label: {
      text: (d: any) => `${(d.frequency * 100).toFixed(1)}%`,
      textBaseline: "bottom",
    },
    axis: {
      y: {
        labelFormatter: ".0%",
      },
    },
    style: {
      // 圆角样式
      radiusTopLeft: 10,
      radiusTopRight: 10,
    }
  });

  window.matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", () => setTheme(getTheme()));

  return <Column {...config}
                 theme={theme}/>;
}

export default Chart;
