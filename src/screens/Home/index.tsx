import { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import { Participant } from '../components/Participant';
import { styles } from './styles';

export function Home() {

  const [nameEvent, setNameEvent] = useState('');
  const [events, setEvents] = useState<string[]>([]);

  const [dateEvent, setDateEvent] = useState('');
  const [dateEvents, setDateEvents] = useState<string[]>([]);

  const [participantName, setParticipantName] = useState('');
  const [participants, setParticipants] = useState<string[]>([]);

  function hadleEventAdd() {
    setEvents(prevState => [...prevState, nameEvent]);
    setNameEvent('');
  }
  function hadleDateEventAdd() {
    setDateEvents(prevState => [...prevState, dateEvent]);
    setDateEvent('');
  }

  function hadleParticipantAdd() {



    if (!participantName.trim()) {
      return Alert.alert("Importante", "Preecha o nome do participante.");
    }

    if (participants.includes(participantName)) {
      return Alert.alert("Participante Existe", "Já existe um participante na lista com esse nome.");
    }

    setParticipants(prevState => [...prevState, participantName]);
    setParticipantName('');
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Remover", `Deseja remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name))
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Registre o seu Evento!
      </Text>
      <Text style={styles.eventName}>
        Evento: {events[0]}
      </Text>
      <Text style={styles.eventDate}>
        Data: {dateEvents[0]}
      </Text>
      <Text style={styles.eventDate}>
        Total de Participantes: {participants.length}
      </Text>

      {events.length === 0 && (

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholderTextColor="#6B6B6B"
            placeholder="Nome do Evento"
            onChangeText={setNameEvent}
            value={nameEvent}
          />
          <TouchableOpacity style={styles.button} onPress={hadleEventAdd}>
            <Text style={styles.buttonText}>
              +
            </Text>
          </TouchableOpacity>
        </View>

      )}


      {events.length > 0 && dateEvents.length === 0 && (

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholderTextColor="#6B6B6B"
            placeholder="Data do Evento"
            onChangeText={setDateEvent}
            value={dateEvent}
          />
          <TouchableOpacity style={styles.button} onPress={hadleDateEventAdd}>
            <Text style={styles.buttonText}>
              +
            </Text>
          </TouchableOpacity>
        </View>

      )}

      {events.length > 0 && dateEvents.length > 0 && (
        <>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholderTextColor="#6B6B6B"
              placeholder="Nome do participante"
              onChangeText={setParticipantName}
              value={participantName}
            />
            <TouchableOpacity style={styles.button} onPress={hadleParticipantAdd}>
              <Text style={styles.buttonText}>
                +
              </Text>
            </TouchableOpacity>
          </View>

          <FlatList
            data={participants}
            keyExtractor={item => item}
            renderItem={({ item }) => (
              <Participant
                key={item}
                name={item}
                onRemove={() => handleParticipantRemove(item)}
              />
            )}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={() => (
              <Text style={styles.listEmptyText}>
                Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.
              </Text>
            )}
          />
        </>
      )}
    </View>
  );
}