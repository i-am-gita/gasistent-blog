package gita.gasistent.blog.backend.dto;

public class TagDto {

    public String id;
    public String name;

    public TagDto(){
    }

    public  TagDto(String id, String name){
        this.id = id;
        this.name = name;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
