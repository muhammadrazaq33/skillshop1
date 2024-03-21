/* eslint-disable react/prop-types */
import { createContext, useContext, useRef, useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

const AccordianContext = createContext();

export default function Accordian({ children, value, onChange, ...props }) {
  const [selected, setSelected] = useState(value);

  useEffect(() => {
    onChange?.(selected);
  }, [selected]);

  return (
    <ul {...props}>
      <AccordianContext.Provider value={{ selected, setSelected }}>
        {children}
      </AccordianContext.Provider>
    </ul>
  );
}

export function AccordianItem({ children, value, trigger, ...props }) {
  const { selected, setSelected } = useContext(AccordianContext);
  const open = selected === value;

  const ref = useRef(null);

  return (
    <li className=" bg-[white] rounded-3xl " {...props}>
      <header
        role="button"
        onClick={() => setSelected(open ? null : value)}
        className={`flex justify-between items-center gap-2 p-4 text3 rs4:pl-9 pl-2 hover:bg-[#f0f0f0] `}
      >
        {/* {trigger} */}
        <p className="">{trigger}</p>
        <FaChevronDown
          size={17}
          className={`transition-transform ${
            open ? "rotate-180" : ""
          } flex-shrink-0`}
        />
      </header>
      <div
        className="overflow-y-hidden transition-all"
        style={{ height: open ? ref.current?.offsetHeight || 0 : 0 }}
      >
        <div className="pt-1 p-2" ref={ref}>
          {children}
        </div>
      </div>
    </li>
  );
}
