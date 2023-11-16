import React, { useEffect } from "react";
import CloseIcon from "./icons/CloseIcon";
import CodeEditor from "@uiw/react-textarea-code-editor";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const ModalShowCode = ({ showModal, setShowModal, htmlcode }) => {
  return (
    <div
      className={` ${
        showModal === true ? "opacity-100 " : "pointer-events-none opacity-0"
      } fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-black bg-opacity-40 transition-all duration-200 ease-in-out`}
      onClick={() => {
        setShowModal(false);
      }}
    >
      <div
        className="bg-[#1e293b] flex flex-col rounded-lg w-[50%] h-[75%] p-5 pb-8"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="flex items-center justify-end">
          <button
            className="max-w-max p-2 bg-[#0f172a] rounded-full"
            onClick={() => {
              setShowModal(false);
            }}
          >
            <CloseIcon></CloseIcon>
          </button>
        </div>
        <h3 className="text-lg font-semibold ">Tailwind Css</h3>
        {/* <CodeEditor
          // prefixCls="custom-code-editor"
          value={htmlcode}
          language="html"
          // onChange={(evn) => setCode(evn.target.value)}
          className="w-tc-editor-text"
          // disabled
          padding={15}
          data-color-mode="dark"
          style={{
            fontSize: 14,
            fontWeight: "500",
            backgroundColor: "#0f172a",
            color: "#fff",
            letterSpacing: "0.5px",
            lineHeight: "1.5",
            height: "100%",
            marginTop: "20px",
            borderRadius: "5px",
            overflowY: "auto",
            fontFamily:
              "input Mono,Monospace,ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
          }}
        /> */}

        <SyntaxHighlighter
          language="javascript"
          wrapLines
          wrapLongLines
          style={atomOneDark}
          className="w-tc-editor-text !bg-[#0d1526] !leading-[22px]"
        >
          {htmlcode}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default ModalShowCode;
