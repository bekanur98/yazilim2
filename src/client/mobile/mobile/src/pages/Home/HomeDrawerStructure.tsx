import React from "react";
import {TouchableOpacity, View} from "react-native";
import {Icon} from "native-base";
import {State} from "react-native-gesture-handler";

interface Props {
    navigationProps(navigation:any) : void

}

class HomeDrawerStructure extends React.Component<Props,State> {
    //Structure for the navigatin Drawer
    toggleDrawer = () => {
        //Props to open/close the drawer
        // this.props.navigationProps.toggleDrawer();
    };
    render() {
        return (
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
                    {/*Donute Button Image */}
                    <Icon
                        name={"menu-fold"}
                        type={"AntDesign"}
                    />
                </TouchableOpacity>
            </View>
        );
    }
}

export default HomeDrawerStructure