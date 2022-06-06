import React from 'react';
import { View } from 'react-native-web';
import ListFilter from './ListFilter';
import ListSort from './ListSort';
import PropTypes from 'prop-types';
import styles from './styles';

function ListControls({onFilter, onSort, asc}) {
    return (
        <View style={styles.controls}>
            <ListFilter onFilter={onFilter}/>
            <ListSort onSort={onSort} asc={asc}/>
        </View>
    );
}

ListControls.propType = {
    onFilter: PropTypes.func.isRequired,
    onSort: PropTypes.func.isRequired,
    asc: PropTypes.bool.isRequired
}

export default ListControls;