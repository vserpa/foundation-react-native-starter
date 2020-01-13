import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import api from '../services/api';

export default class Main extends Component {
    static navigationOptions = {
        title: 'JS Hunt'
    };

    state = {
        docs: []
    }

    componentDidMount() {
        this.loadProducts();
    }

    // arrow function nunca cria um novo escopo de função, ele 
    // se utiliza do escopo corrente e possui acesso à this.*
    loadProducts = async () => {
        const response = await api.get('/products');
        const { docs } = response.data;        
        this.setState({ docs });
    }

    renderItem = ({ item }) => (
        <View>
            <Text>{item.title}</Text>
            <Text>{item.description}</Text>
            <TouchableOpacity onPress={() => {}}>
                <Text>Access</Text>
            </TouchableOpacity>
        </View>
    )

    render() {
        return (
            <View>
                <FlatList
                    data={this.state.docs}
                    keyExtractor={item => item._id}
                    renderItem={this.renderItem}
                />
            </View>
        )
    }
}