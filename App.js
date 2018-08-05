import react, {Component} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { Provider } from 'react-redux'
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'

import store from './store'

import TestScreen from './screens/TestScreen'
import Test2Screen from './screens/Test2Screen'
import Test3Screen from './screens/Test3Screen'
import DummyFormScreen from './screens/dummy/DummyFormScreen'
import DummyFormScreen from './screens/dummy/DummyFormScreen'
import DummyFormScreen from './screens/dummy/DummyFormScreen'


const networkInterface = createNetworkInterface ({
  uri : 'https://wfm.supersabar.com/api/graphql' 
});

networkInterface.use([{
  applyMiddleware(req, next) {
    if(!req.options.headers) {
      req.options.headers = {
        authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImZhamFyLmJhc2thcmFAc3VwZXJzb2NjZXIuY28uaWQiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwidXNlcl9tZXRhZGF0YSI6e30sImFwcF9tZXRhZGF0YSI6eyJyb2xlIjoiYWRtaW4ifSwiaXNzIjoiaHR0cHM6Ly9zc3R2LmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw1OTEwYjEyMWNhZmQyOTFkZDA5YjU3MTYiLCJhdWQiOiJkODZvQ0ZndTVWbkQ2WGl3MDdpcTgxa2JpWkZDRHJKMyIsImV4cCI6MTQ5Njg2MTYzMiwiaWF0IjoxNDk2ODI1NjMyfQ.uPTOFvggU41oS7XqXaDXXDRSwrh17CB52-Qmp0cykGk`
      }
      next();
    }
  }
}]);scss

const apolloClient = new ApolloClient({
  networkInterface: networkInterface,
  reduxRootSelector: state => state.apollo,
});


export default class App extends Component {
  render() {
    console.log("main render")

          // Main Navigator
      const MainNavigator = TabNavigator({

        // key : screen : screenComponent
        test : {screen : TestScreen},
        testFlow : {
          screen : StackNavigator({
            test2 : { screen : Test2Screen },
            test3 : { screen : Test3Screen }
          })
        },
        dummyFlow : {
          screen : StackNavigator({
            dummyList : {screen : DummyFormScreen},
            dummyDetail : {screen : DummyFormScreen},
            dummyForm : {screen : DummyFormScreen}
          })
        },

        // New Feture Coming Soon
        // newManageFlow
          // - screen 1 : pick country, city , name
          // - screen 2 : pick players
          // - screen 3 : pick staffs
          // - screen 4 : set formations

        // MainflowTrap
          // -set formations
          // -set Training
          // -edit staff
          // -view profile
          // -view club
          // -transfer
          },
          {
            navigationOptions: {
              tabBarVisible : false
            },
            lazy: true
         },   
      )

    return(
        <ApolloProvider client={ApolloClient} store={store}>
            <MainNavigator/>
        </ApolloProvider>
    )
  }
}