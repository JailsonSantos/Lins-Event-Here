import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#131016',
  },
  eventName: {
    fontSize: 24,
    marginTop: 28,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  eventDate: {
    fontSize: 16,
    color: '#6B6B6B',
  },
  input: {
    flex: 1,
    height: 56,
    padding: 16,
    fontSize: 16,
    color: '#FFF',
    borderRadius: 5,
    marginRight: 12,
    backgroundColor: '#1F1E25',
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#31CF67',
  },
  buttonText: {
    fontSize: 24,
    color: '#FFF',
  },
  form: {
    width: '100%',
    marginTop: 36,
    marginBottom: 36,
    flexDirection: 'row',
  },
  listEmptyText: {
    fontSize: 14,
    color: '#FFF',
    textAlign: 'center',
  }
})