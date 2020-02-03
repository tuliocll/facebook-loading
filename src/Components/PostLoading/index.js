import React from "react";
import ContentLoader from "react-content-loader";

export default function PostLoading() {
  return (
    <div className="post">
      <ContentLoader
        speed={2}
        width="100%"
        height={160}
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="6" y="8" rx="0" ry="0" width="53" height="49" />
        <rect x="63" y="12" rx="0" ry="0" width="154" height="18" />
        <rect x="65" y="35" rx="0" ry="0" width="55" height="9" />
        <rect x="11" y="65" rx="0" ry="0" width="485" height="15" />
        <rect x="12" y="86" rx="0" ry="0" width="389" height="14" />
        <rect x="10" y="116" rx="0" ry="0" width="26" height="31" />
        <rect x="60" y="163" rx="0" ry="0" width="542" height="14" />
        <rect x="41" y="121" rx="0" ry="0" width="550" height="23" />
        <rect x="170" y="121" rx="0" ry="0" width="7" height="3" />
      </ContentLoader>
    </div>
  );
}
