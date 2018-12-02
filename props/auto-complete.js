import Autocomplete from 'react-native-autocomplete-input';
import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

class AutoCompleteText extends Component {

  constructor(props) {
    super(props);
    this.state = {
      elements: this.props._data,
      query: ''
    };
  }

  findFilm(query) {
    if (query === '') {
      return [];
    }

    const { elements } = this.state;
    const regex = new RegExp(`${query.trim()}`, 'i');
    return elements.filter(film => film.city.search(regex) >= 0);
  }


  render() {
    const { query } = this.state;
    const elements = this.findFilm(query);
    const comp = (a, b) => a.toLowerCase().trim() === b.toLowerCase().trim();

    return (
        <Autocomplete
            style={styles.selector}
            autoCapitalize="none"
            autoCorrect={false}
            inputContainerStyle={styles.autoCompleteInput}
            containerStyle={styles.autoCompleteContainer}
            data={elements.length === 1 && comp(query, elements[0].city) ? [] : elements}
            defaultValue={query}
            onChangeText={text => this.setState({ query: text })}
            placeholder={this.props.placehold}
            renderItem={({ city }) => (
            <TouchableOpacity onPress={() => {
                        this.setState({ query: city });
                        this.props.fun(city);
                    }
                }>
                <Text style={styles.itemText}>
                {city}
                </Text>
            </TouchableOpacity>
            )}
        />

    );
  }
}


const styles = StyleSheet.create({
    selector: {
        marginLeft:'5%',
        marginRight:'5%',
        justifyContent: 'center',
        padding:7,
        height:40,
        color: '#6600ee',
        borderColor: '#6600ee',
        borderRadius: 20,
        borderWidth: 2,
    },
    inpuGroup: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        marginBottom:20,
    },
    itemText: {
        fontSize: 15,
        margin: 12
    },
    autoCompleteContainer:{
        marginBottom:20,
        borderWidth: 0,
    },   
});

export default AutoCompleteText;
