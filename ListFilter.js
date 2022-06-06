import React from 'react';
import { TextInput, View } from 'react-native-web';
import PropTypes from 'prop-types';

function ListFilter(onFilter) {
    return (
        <View>
            <TextInput
                autoFocus
                placeholder="Search"
                style= {styles.filter}
                onChangeText={onFilter}
            />
        </View>
    );
}

ListFilter.propTypes = {
    onFilter: PropTypes.func.isRequired, 
}

export default ListFilter;