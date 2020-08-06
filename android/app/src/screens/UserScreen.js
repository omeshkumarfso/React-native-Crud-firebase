import React, { useState, useEffect,Component } from 'react';
import { StyleSheet, ScrollView, Text,ActivityIndicator,
  View, FlatList, } from 'react-native';
import { ListItem } from 'react-native-elements';
import firestore from '@react-native-firebase/firestore';

// function UserScreen() {
//   const [loading, setLoading] = useState(true); // Set loading to true on component mount
//   const [users, setUsers] = useState([]); // Initial empty array of users
//   useEffect(() => {
//     const subscriber = firestore()
//       .collection('Users')
//       .onSnapshot(querySnapshot => {
//         const users = [];

//         querySnapshot.forEach(documentSnapshot => {
//           users.push({
//             ...documentSnapshot.data(),
//             key: documentSnapshot.id,
//           });
//         });
//         setUsers(users);
//         setLoading(false);
//       });

//     // Unsubscribe from events when no longer in use
//     return () => subscriber();
//   }, []);

//   if (loading) {
//     return <ActivityIndicator size="large" color="red" />;
//   }

//   return(
//     <FlatList
//         data={users}
//         renderItem={({item}) =>(
//           <View style={{flex:1,alignItems: 'center', justifyContent:'center'}}>
//             <Text>User ID: {item.id} </Text>
//             <Text>User Name: {item.name} </Text>
//             <Text>User Email: {item.email} </Text>
//             <Text>User Mobile: {item.mobile} </Text>
//           </View>
//         )}
//     />
//   )
// }


class UserScreen extends Component {

  constructor() {
    super();
    this.firestoreRef = firestore().collection('Users');
    this.state = {
      isLoading: true,
      userArr: []
    };
  }

  componentDidMount() {
    this.unsubscribe = this.firestoreRef.onSnapshot(this.getCollection);
  }

  componentWillUnMount() {
    this.unsubscribe();
  }

  getCollection = (querySnapshot) => {
    const userArr = [];
    querySnapshot.forEach((res) => {
      const { name, email, mobile } = res.data();
      userArr.push({
        key: res.id,
        res,
        name,
        email,
        mobile,
      });
    });
    this.setState({
      userArr,
      isLoading: false,
    });
  }


  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.preloader}>
          <ActivityIndicator size='large' color='#9E9E9E' />
        </View>
      )
    }
    return (
      <ScrollView style={styles.container}>
        {
          this.state.userArr.map((item, i) => {
            return (
              <ListItem
                key={i}
                chevron
                bottomDivider
                title={item.name}
                subtitle={item.email}
                onPress={() => {
                  this.props.navigation.navigate('UserDetailScreen', {
                    userkey: item.key
                  });
                }}
              />
            );
          })
        }
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 22
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center'
  }
})



export default UserScreen;