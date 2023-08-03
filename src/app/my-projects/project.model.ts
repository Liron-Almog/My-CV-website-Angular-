export class Project{
    public nameProject: string;
    public description: string;
    public videoPath: string;

    constructor(name:string,desc:string,videoPath:string){
        this.nameProject = name;
        this.description =desc;
        this.videoPath = videoPath;
    }

}