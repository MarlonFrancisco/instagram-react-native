import React, {useState, useCallback} from 'react';
import {View, FlatList, RefreshControl} from 'react-native';
import {style} from './style';
import Header from './../../components/Header';
import Post from './../../components/Post';

const wait = (time) => {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
};

export default () => {
  const [state, setState] = useState({
    posts: [
      {
        id: Math.random(),
        nickname: 'Paula Fernanda',
        email: 'paula.fernanda@gmail.com',
        image: require('./../../../assets/imgs/fence.jpg'),
        description: 'Foto de ontem sz',
        comments: [
          {
            nickname: 'Hiago Fagundes',
            comment: 'Bonita foto parça',
          },
          {
            nickname: 'Marlon Francisco',
            comment: 'Ulala',
          },

          {
            nickname: 'Marlon Francisco',
            comment: 'Ulala',
          },
          {
            nickname: 'Marlon Francisco',
            comment: 'Ulala',
          },
        ],
      },
      {
        id: Math.random(),
        nickname: 'Marlon Francisco',
        email: 'marlon.nascimento@gmail.com',
        image: require('./../../../assets/imgs/bw.jpg'),
        comments: [],
      },
    ],
    refreshing: false,
  });

  const onRefresh = useCallback(() => {
    setState((prevState) => ({...prevState, refreshing: true}));
    wait(2000).then(() =>
      setState((prevState) => ({...prevState, refreshing: false})),
    );
  }, []);

  return (
    <View style={style.container}>
      <Header />
      <FlatList
        data={state.posts}
        keyExtractor={(item) => `${item.id}`}
        refreshControl={
          <RefreshControl
            refreshing={state.refreshing}
            onRefresh={() => onRefresh()}
          />
        }
        renderItem={({item}) => <Post {...item} key={item.id} />}
      />
    </View>
  );
};
