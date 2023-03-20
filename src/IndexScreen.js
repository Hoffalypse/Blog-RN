import { View, Text, FlatList, Button} from 'react-native'
import React, { useContext } from 'react'
import BlogContext from '../context/BlogContext'


const IndexScreen = () => {

    const {data, addBlogPost} = useContext(BlogContext)
  return (
    <View>
      <Text>Index Screen</Text>
      <Button 
      title='Add Post'
      onPress={addBlogPost}
      />
      <FlatList 
      data={data}
      keyExtractor={(blogPost) => blogPost.title}
      renderItem={({item}) => <Text>{item.title}</Text>}
      />

    </View>
  )
}

export default IndexScreen