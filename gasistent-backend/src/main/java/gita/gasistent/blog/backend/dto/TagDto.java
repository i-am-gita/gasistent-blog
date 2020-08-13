package gita.gasistent.blog.backend.dto;

public class TagDto {

    public String name;

    public TagDto(){
    }

    public TagDto(String name){
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
