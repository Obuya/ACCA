// gets all the active rooms in the database 
const { db } = require('./components/Firebase/firebase');

exports.getAllRooms = (request, response) => {
	db
		.collection('Rooms')
		.orderBy('createdAt', 'desc')
		.get()
		.then((data) => {
			let Rooms = [];
			data.forEach((doc) => {
				Rooms.push({
                    RoomId: doc.id,
                    metadata: doc.data().metadata,
					size: doc.data().size,
					createdAt: doc.data().createdAt,
				});
			});
			return response.json(Rooms);
		})
		.catch((err) => {
			console.error(err);
			return response.status(500).json({ error: err.code});
		});
};


exports.postOneRoom = (request, response) => {
	if (request.body.body.trim() === '') {
		return response.status(400).json({ body: 'Must not be empty' });
    }
    
    if(request.body.title.trim() === '') {
        return response.status(400).json({ title: 'Must not be empty' });
    }
    
    const newRoomItem = {
        RoomId: request.body.RoomId, // think about just using reacts id's 
        metadata: request.body.metadata,
        size: request.body.size,
        createdAt: new Date().toISOString()
    }
    db
        .collection('Rooms')
        .add(newRoomItem)
        .then((doc)=>{
            const responseRoomItem = newRoomItem;
            responseRoomItem.id = doc.id;
            return response.json(responseRoomItem);
        })
        .catch((err) => {
			response.status(500).json({ error: 'Something went wrong' });
			console.error(err);
		});
};


exports.deleteRoom = (request, response) => {
    const document = db.doc(`/Rooms/${request.params.RoomId}`);
    document
        .get()
        .then((doc) => {
            if (!doc.exists) {
                return response.status(404).json({ error: 'Todo not found' })
            }
            return document.delete();
        })
        .then(() => {
            response.json({ message: 'Delete successfull' });
        })
        .catch((err) => {
            console.error(err);
            return response.status(500).json({ error: err.code });
        });
};