import React, { Component } from 'react';
import { View, Text } from 'react-native';
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

    render() {
        return (
            <View>
                <Text>Main Page</Text>
                {this.state.docs.map(product => (
                    <Text key={product._id}>{product.title}</Text>
                ))}
            </View>
        )
    }
}