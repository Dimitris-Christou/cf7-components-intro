import ClassComponent from "./components/ClassComponent.tsx";
import FunctionalComponent from "./components/FunctionalComponent.tsx";
import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentWithProps.tsx";
import ArrowFunctionalComponentWithPropType from "./components/ArrowFunctionalComponentWithPropType.tsx";

function App() {


  return (
    <>
        <ClassComponent/>
        <FunctionalComponent/>
        <ArrowFunctionalComponent/>
        <ArrowFunctionalComponentWithProps title="This is an Arrow Functional Component with Props"/>
        <ArrowFunctionalComponentWithPropType
            title="This is an Arrow Functional Component with Props"
            description="This is a description"/>

    </>
  )
}

export default App
