import React from 'react'
import { View, Text ,Modal, TouchableOpacity, ScrollView} from 'react-native'
import styles from './styles'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

const AppModal = ({modalVisible,setModalVisible,modalBody,modalFooter,title}) => {
    return (
        <Modal visible={modalVisible} transparent>
        <TouchableOpacity  style={styles.wrapper}>
            <View style={styles.modalView}>
                <ScrollView>
                <View>
                <View style={styles.header}>
                <TouchableOpacity onPress={()=>{
            setModalVisible(false)
        }}><MaterialIcon name="close" size={21} style={{padding:10}} ></MaterialIcon></TouchableOpacity>
                
                <Text style={styles.title}>{title||'Contax'}</Text>
                <View></View>
                </View>
                </View>
                <View style={styles.footerSeparator} />
                <View style={styles.body}>
                {modalBody}

                </View>
                {modalFooter}
                {!modalFooter && <View>
                    <>
                  <View style={styles.footerSeparator} />
                  <View style={styles.footerItems}>
                    <View style={styles.footer}>
                      <Text style={styles.footerText}>Privacy Policy</Text>
                      <View style={styles.termsView} />
                      <Text style={styles.footerText}>Terms of Service</Text>
                    </View>
                  </View>
                </>
                </View>}
                </ScrollView>
            </View>
        </TouchableOpacity>
            
        </Modal>
    )
}

export default AppModal
