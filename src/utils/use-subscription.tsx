import { Observable } from "rxjs";
import * as React from "react";

export function useSubscription<T>(source: Observable<T>) {
  return React.useEffect(() => {
    const subscription = source.subscribe();
    return () => subscription.unsubscribe();
  }, []);
}
