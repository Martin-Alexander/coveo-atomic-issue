import {
  AtomicLoadMoreResults,
  AtomicSearchInterface,
  buildSearchEngine,
  AtomicResultLink,
  AtomicResultList
} from "@coveo/atomic-react";
import React from "react";

export default function App() {
  const engine = buildSearchEngine({
    configuration: {
      accessToken: "xx697404a7-6cfd-48c6-93d1-30d73d17e07a",
      organizationId: "barcagroupproductionkwvdy6lp"
    }
  });

  return (
    <AtomicSearchInterface engine={engine}>
      <AtomicResultList
        display="grid"
        template={() => <AtomicResultLink />}
      />
      <AtomicLoadMoreResults/>
    </AtomicSearchInterface>
  )
}
