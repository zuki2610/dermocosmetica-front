import React from 'react';
import { Document, Page, Text, View, Image, StyleSheet } from '@react-pdf/renderer';

const PDFDocument = ({ paciente, recomendaciones, medicinas }) => {
    console.log('paciente', paciente);
    console.log('recomendaciones', recomendaciones);
    console.log('medicinas', medicinas);
 
    const styles = StyleSheet.create({
      page: { backgroundColor: 'red' },
      section: { color: 'white', textAlign: 'center', margin: 30, backgroundImage: URL("") }
    });
 
 
    return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>>
          <Text>Nombre: {paciente.name}</Text>
          <Text>RUT: {paciente.rut}</Text>
          <Text>Correo: {paciente.email}</Text>
          <Text>Fecha de nacimiento: {paciente.fechaNacimiento}</Text>
          <Text>Patología: {paciente.patologia}</Text>
        </View>
        <View>
          <Text>Recomendaciones: {recomendaciones}</Text>
        </View>
        <View>
          <Text>Medicinas:</Text>
          <View>
            {medicinas.map((medicina, index) => (
              <View key={index}>
                <Image src={medicina.imagenUrl} />
                <Text>Nombre: {medicina.name}</Text>
                <Text>Marcas: {medicina.marcaId.name}</Text>
                <Text>Componentes: {medicina.componente.join(', ')}</Text>
              </View>
            ))}
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default PDFDocument;
