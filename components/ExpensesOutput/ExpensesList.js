import { FlatList, View, StyleSheet } from "react-native";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = ({expenses}) =>{

    const renderItem = (itemData) => {
        //console.log('itemData ', itemData.item.title)
        return <ExpenseItem {...itemData.item} />
    }

    //console.log('itemData ', expenses)
    return (
      <View style={styles.container}>
        <FlatList 
            data={expenses} 
            renderItem={renderItem} 
            keyExtractor={item=>item.id}
        />
    </View>)
}

export default ExpensesList;

const styles = StyleSheet.create({
  container: {

  }
})