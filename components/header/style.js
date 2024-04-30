import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    navBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#333',
        paddingVertical: 10,
        paddingHorizontal: 5,
    },
    logo: {
        width: 120,
        height: 50,
    },
    navItem: {
        alignItems: 'center',
    },
    navText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        paddingHorizontal: 100,  
    },
});
