// import ClassComponent from "./components/ClassComponent.tsx";
// import FunctionalComponent from "./components/FunctionalComponent.tsx";
// import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
// import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentWithProps.tsx";
// import ArrowFunctionalComponentWithPropType from "./components/ArrowFunctionalComponentWithPropType.tsx";
import Layout from "./components/Layout.tsx";
import CounterWithAdvancedCustomHook from "./components/CounterWithAdvancedCustomHook.tsx";
// import CounterWithCustomHook from "./components/CounterWithCustomHook.tsx";
// import ClassComponentWithState from "./components/ClassComponentWithState.tsx";
// import FunctionalComponent from "./components/FunctionalComponent.tsx";
// import FunctionalComponentWithState from "./components/FunctionalComponentWithState.tsx";
// import Counter from "./components/Counter.tsx";
// import CounterWithMultipleStates from "./components/CounterWithMultipleStates.tsx";
// import CounterAdvanced from "./components/CounterAdvanced.tsx";
// import NameChanger from "./components/NameChanger.tsx";



function App() {


  return (
    <>
        <Layout>
            {/*<ClassComponent/>*/}
            {/*<FunctionalComponent/>*/}
            {/*<ArrowFunctionalComponent/>*/}
            {/*<ArrowFunctionalComponentWithProps title="This is an Arrow Functional Component with Props"/>*/}
            {/*<ArrowFunctionalComponentWithPropType*/}
            {/*    title="This is an Arrow Functional Component with Props"*/}
            {/*    description="This is a description"*/}
            {/*/>*/}
            {/*<h1 className="text-center text-2xl font-bold">This is a heading 1 title</h1>*/}
            {/*<FunctionalComponent/>*/}

            {/*<ClassComponentWithState/>*/}
            {/*<FunctionalComponentWithState/>*/}
            {/*<Counter/>*/}
            {/*<NameChanger/>*/}
            {/*<CounterWithMultipleStates/>*/}
            {/*<CounterAdvanced/>*/}
            {/*<CounterWithCustomHook/>*/}
            <CounterWithAdvancedCustomHook/>

        </Layout>
    </>
  )
}

export default App
