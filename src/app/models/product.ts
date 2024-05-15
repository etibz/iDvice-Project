export class Product{

        private brand: string;
        private title: string;
        private picture: string;
        private processor: string;
        private ram : number;
        private storage : string;
        private screen : string;
        private features : string;
        private height : number;
        private width : number;
        private depth : number;
        private battery : number;
        private warranty : number;
        private price: number;
      
    
      
    constructor (brand : string, title : string, picture : string, processor : string, ram : number, storage : string, screen : string,features : string, height : number, width : number, depth : number, battery : number, warranty : number , price : number){
        this.brand = brand;
        this.title = title;
        this.picture = picture;
        this.processor = processor;
        this.ram = ram;
        this.storage = storage;
        this.screen = screen;
        this.features = features;
        this.height = height;
        this.width = width;
        this.depth = depth;
        this.battery = battery;
        this.warranty = warranty;
        this.price = price;
    }
    
    getBrand(): string {
        return this.brand;
    }

    setBrand(brand: string) {
        this.brand = brand;
    }

    getTitle(): string {
        return this.title;
    }

    setTitle(title: string) {
        this.title = title;
    }

    getPicture(): string {
        return this.picture;
    }

    setPicture(picture: string) {
        this.picture = picture;
    }

    getProcessor(): string {
        return this.processor;
    }

    setProcessor(processor: string) {
        this.processor = processor;
    }

    getRam(): number {
        return this.ram;
    }

    setRam(ram: number) {
        this.ram = ram;
    }

    getStorage(): string {
        return this.storage;
    }

    setStorage(storage: string) {
        this.storage = storage;
    }

    getScreen(): string {
        return this.screen;
    }

    setScreen(screen: string) {
        this.screen = screen;
    }

    getFeatures(): string {
        return this.features;
    }

    setFeatures(features: string) {
        this.features = features;
    }

    getHeight(): number {
        return this.height;
    }

    setHeight(height: number) {
        this.height = height;
    }

    getWidth(): number {
        return this.width;
    }

    setWidth(width: number) {
        this.width = width;
    }

    getDepth(): number {
        return this.depth;
    }

    setDepth(depth: number) {
        this.depth = depth;
    }

    getBattery(): number {
        return this.battery;
    }

    setBattery(battery: number) {
        this.battery = battery;
    }

    getWarranty(): number {
        return this.warranty;
    }

    setWarranty(warranty: number) {
        this.warranty = warranty;
    }

    getPrice(): number {
        return this.price;
    }

    setPrice(price: number) {
        this.price = price;
    }

    toString(): string {
        return "Brand: " + this.brand + 
               ", Title: " + this.title + 
               ", Picture: " + this.picture + 
               ", Processor: " + this.processor + 
               ", RAM: " + this.ram + 
               ", Storage: " + this.storage + 
               ", Screen: " + this.screen + 
               ", Features: " + this.features + 
               ", Height: " + this.height + 
               ", Width: " + this.width + 
               ", Depth: " + this.depth + 
               ", Battery: " + this.battery + 
               ", Warranty: " + this.warranty + 
               ", Price: " + this.price;
    }
}
