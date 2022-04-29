import { useEffect, useRef, useState } from "react";
import { BehaviorSubject } from "rxjs";

function useObservableValue(observer: BehaviorSubject<any>) {
  const observerRef = useRef(observer);
  const [value, setValue] = useState(observerRef.current.getValue());

  useEffect(() => {
    const subscription = observerRef.current.subscribe((item) => {
      setValue(item);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return value;
}

export default useObservableValue;
