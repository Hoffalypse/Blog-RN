
import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import IndexScreen from "./src/IndexScreen";
import { BlogProvider } from "./context/BlogContext";

const navigator = createStackNavigator({
  Index: IndexScreen,

},
{
  initialRouteName:'Index',
  defaultNavigationOptions: {
    title: 'Hoff Blogs'
  }
}
)

const App = createAppContainer(navigator)

export default () => {
  return <BlogProvider>
    <App/>
    </BlogProvider>
}
