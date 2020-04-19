class StreamStoreService {
    constructor() {
        this.nextId = 0;
        this.store = [];
    }

    saveStream(stream) {
        this.store.push({
            id: this.nextId,
            stream,
        });
        const id = this.nextId;
        this.nextId++;
        return id;
    }

    getStream(id) {
        if (!id) return null;
        const obj = this.store.find((storeObj) => storeObj.id === id);
        return obj.stream;
    }
}

export default StreamStoreService;