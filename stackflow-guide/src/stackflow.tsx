import "@stackflow/plugin-basic-ui/index.css";

// import React from "react";

import { basicRendererPlugin } from "@stackflow/plugin-renderer-basic";
import { basicUIPlugin } from "@stackflow/plugin-basic-ui";
import { stackflow } from "@stackflow/react";
import MyActivity from "./MyActivity";
import Article from "./Article";

export const { Stack, useFlow } = stackflow({
  transitionDuration: 350, // 전환 시간
  activities: { MyActivity, Article },
  plugins: [
    basicRendererPlugin(),
    basicUIPlugin({
      theme: "cupertino",
    }),
  ],
  initialActivity: () => "MyActivity",
});
