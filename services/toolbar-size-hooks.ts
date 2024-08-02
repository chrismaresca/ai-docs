// hooks/useParentSize.ts
import { useEffect, useRef, useState } from "react";

const useEditorWindowSize = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [width, setWidth] = useState(0);
  const [mainToolbarItems, setMainToolbarItems] = useState<{ index: number; content: string }[]>([]);
  const [smallToolbarItems, setSmallToolbarItems] = useState<{ index: number; content: string }[]>([]);

  useEffect(() => {
    const handleResize = () => {
      if (ref.current) {
        const toolbarWidth = ref.current.offsetWidth;
        setWidth(toolbarWidth);
        updateToolbarItems(toolbarWidth);
      }
    };

    const updateToolbarItems = (toolbarWidth: number) => {
      const mainItems: { index: number; content: string }[] = [];
      const smallItems: { index: number; content: string }[] = [];

      ref.current?.querySelectorAll<HTMLDivElement>(".toolbar-component").forEach((child, index) => {
        const toolbarComponentSizeCutoff = parseInt(child.getAttribute("data-size") || "0", 10);
        if (toolbarComponentSizeCutoff > toolbarWidth) {
          smallItems.push({ index, content: child.innerHTML });
        } else {
          mainItems.push({ index, content: child.innerHTML });
        }
      });

      setMainToolbarItems(mainItems);
      setSmallToolbarItems(smallItems);
    };

    const resizeObserver = new ResizeObserver(handleResize);

    if (ref.current) {
      resizeObserver.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        resizeObserver.unobserve(ref.current);
      }
    };
  }, []);

  return [ref, width, mainToolbarItems, smallToolbarItems] as const;
};

export default useEditorWindowSize;
