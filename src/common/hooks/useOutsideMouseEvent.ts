import { MutableRefObject, RefObject, useEffect } from "react";

type TEventTypes =  'click' | 'mousdown' | 'mouseup' | 'dblclick'

export function useOutsideMouseEvent(elementRefs: RefObject<HTMLElement>[], handler: EventListener, eventType: TEventTypes = 'click') {
  useEffect(() => {
    console.log('run effect')
    function handleEvent(event: Event) {
      console.log('handle event')
      if(elementRefs.every(elRef => !elRef.current || !elRef.current.contains(event.target as Node) )) {
        console.log('run handler')
        handler(event)
      }
    }

    document.addEventListener(eventType as keyof DocumentEventMap, handleEvent);
    return () => {
      document.removeEventListener(eventType as keyof DocumentEventMap, handleEvent);
    };
  }, [...elementRefs, handler]);
}