import { ClassNames } from "@emotion/react";

export function TabPanelList(props) {
  const { StackImg, StackText } = props;
  return (
    <div className="w-full h-28 bg-slate-200 rounded-lg mt-2 flex items-center">
      <div className="p-2 flex   w-full">
        <div className="w-32 flex justify-around">
          <img className="w-12" src={StackImg} />
        </div>
        <p className="text-sm">{StackText}</p>
      </div>
    </div>
  );
}
