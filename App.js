import React, {useState}from 'react';
import { Text, StyleSheet, View, FlatList }  from 'react-native';
import Cita from './componentes/cita';

const App = () => {
 
  const [citas, setCitas] =useState([
    {id: "1",paciente: "Hook", propietario:'ever', sintomas: "no come"},
    {id: "2",paciente: "Redux", propietario:'camila', sintomas: "no duerme"},
    {id: "3",paciente: "Native", propietario:'lili', sintomas: "no canta"},

  ]);

  //eniminar los pacientes 

  const eliminarPaciente = id => {
    setCitas((citasActuales)=>{
      return citasActuales.filter( citas => citas.id !== id );
    })

  }

  return (
    <View style={styles.contenedor}>
       <Text style={styles.titulo}>Administrador de Citas</Text>


      <FlatList
          data={citas}
          renderItem={  ({item}) => <Cita item={item} eliminarPaciente ={eliminarPaciente} />}
          keyExtractor={ cita => cita.id}

      /> 
      
 </View>
    );
  };
    const styles = StyleSheet.create({
      contenedor: {
        backgroundColor: '#AA0768',
        flex: 1
      },

      titulo: {
       color: '#FFF',
       marginTop: 40,
       fontSize: 24,
       fontWeight: 'bold',
       textAlign: 'center'
    }

    });

export default App;
