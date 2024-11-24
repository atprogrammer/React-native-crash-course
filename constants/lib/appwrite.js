import { Client,Account,ID } from 'react-native-appwrite';
export const config = {
    endpoit: 'https://cloud.appwrite.io/v1',
    platform: 'com.jsm.aora',
    projectId: '67401abb0024304c7047',
    databaseId: '67401d34002fbdc941dd',
    userCollectionId: '67401d87000ea987f29a',
    videoCollectionId: '67401dca0030d5dd8ce6',
    storageId: '6740204b0018b7ead87f'
}


// Init your React Native SDK
const client = new Client();
client
    .setEndpoint(config.endpoit) // Your Appwrite Endpoint
    .setProject(config.projectId) // Your project ID
    .setPlatform(config.platform) // Your application ID or bundle ID.


const account = new Account(client);

export const createUser = () => {
    account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe')
        .then(function (response) {
            console.log(response);
        }, function (error) {
            console.log(error);
        });

}