import React, { useEffect, useState } from 'react';
import { View, PermissionsAndroid } from 'react-native';
// import MapView, { Marker } from 'react-native-maps';

// import Geolocation from 'react-native-geolocation-service';

// import { Container } from './styles';

const map: React.FC = () => {

    const [initialPosition, setInitialPosition] = useState<[number, number]>([0, 0]);
    const [hasLocationPermission, setHasLocationPermission] = useState(false);

    useEffect(() => {

        verifyLocationPermission();

        // if (hasLocationPermission) {
        //     Geolocation.getCurrentPosition(position => {

        //         const { latitude, longitude } = position.coords;

        //         setInitialPosition([latitude, longitude])
        //     });
        // }
    }, [hasLocationPermission])

    async function verifyLocationPermission() {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
            );
            console.log(granted);
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log('permissão concedida');
                setHasLocationPermission(true);
            } else {
                console.log("permissão negada");
                setHasLocationPermission(false);
            }
        } catch (err) {
            console.warn(err);
        }
    }


    return (
        <View>





        </View>

    );
}

export default map;