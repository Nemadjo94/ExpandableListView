import React from 'react';
 
import { LayoutAnimation, StyleSheet, View, ScrollView, UIManager, Platform } from 'react-native';
import Expandable_ListView from './Expandable_ListView'; 

export default class App extends React.Component {
 
  constructor() {
    super();
 
    if (Platform.OS === 'android') {
 
      UIManager.setLayoutAnimationEnabledExperimental(true)
 
    }
 
    const array = [
 
      {
        expanded: false, category_Name: "Mobiles", sub_Category: [{ id: 1, name: 'Mi' }, { id: 2, name: 'RealMe' }, { id: 3, name: 'Samsung' },
        { id: 4, name: 'Infinix' }, { id: 5, name: 'Oppo' }, { id: 6, name: 'Apple' }, { id: 7, name: 'Honor' }]
      },
 
      {
        expanded: false, category_Name: "Laptops", sub_Category: [{ id: 8, name: 'Dell' }, { id: 9, name: 'MAC' }, { id: 10, name: 'HP' },
        { id: 11, name: 'ASUS' }]
      },
 
      {
        expanded: false, category_Name: "Computer Accessories", sub_Category: [{ id: 12, name: 'Pendrive' }, { id: 13, name: 'Bag' },
        { id: 14, name: 'Mouse' }, { id: 15, name: 'Keyboard' }]
      },
 
      {
        expanded: false, category_Name: "Home Entertainment", sub_Category: [{ id: 16, name: 'Home Audio Speakers' },
        { id: 17, name: 'Home Theatres' }, { id: 18, name: 'Bluetooth Speakers' }, { id: 19, name: 'DTH Set Top Box' }]
      },
 
      {
        expanded: false, category_Name: "TVs by brand", sub_Category: [{ id: 20, name: 'Mi' },
        { id: 21, name: 'Thomson' }, { id: 22, name: 'LG' }, { id: 23, name: 'SONY' }]
      },
 
      {
        expanded: false, category_Name: "Kitchen Appliances", sub_Category: [{ id: 24, name: 'Microwave Ovens' },
        { id: 25, name: 'Oven Toaster Grills (OTG)' }, { id: 26, name: 'Juicer/Mixer/Grinder' }, { id: 27, name: 'Electric Kettle' }]
      }
    ];
 
    this.state = { AccordionData: [...array] }
  }
 
  update_Layout = (index) => {
 
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
 
    const array = [...this.state.AccordionData];
 
    array[index]['expanded'] = !array[index]['expanded'];
 
    this.setState(() => {
      return {
        AccordionData: array
      }
    });
  }
 
  render() {
    return (
      <View style={styles.MainContainer}>
 
        <ScrollView contentContainerStyle={{ paddingHorizontal: 10, paddingVertical: 5 }}>
          {
            this.state.AccordionData.map((item, key) =>
              (
                <Expandable_ListView key={item.category_Name} onClickFunction={this.update_Layout.bind(this, key)} item={item} />
              ))
          }
        </ScrollView>
 
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
 
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: (Platform.OS === 'ios') ? 20 : 0,
    backgroundColor: '#F5FCFF',
  },
 
  iconStyle: {
 
    width: 30,
    height: 30,
    justifyContent: 'flex-end',
    alignItems: 'center',
    tintColor: '#fff'
 
  },
 
  sub_Category_Text: {
    fontSize: 18,
    color: '#000',
    padding: 10
  },
 
  category_Text: {
    textAlign: 'left',
    color: '#fff',
    fontSize: 21,
    padding: 10
  },
 
  category_View: {
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#0091EA'
  },
 
  Btn: {
    padding: 10,
    backgroundColor: '#FF6F00'
  }
 
});