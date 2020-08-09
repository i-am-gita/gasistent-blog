package gita.gasistent.blog.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication
@ComponentScan({"gita.gasistent.blog.backend.mapper",
		"gita.gasistent.blog.backend.controller",
		"gita.gasistent.blog.backend.service",
		"gita.gasistent.blog.backend.repository",
		"gita.gasistent.blog.backend.security",
		"gita.gasistent.blog.backend.model",
		"gita.gasistent.blog.backend.payload"})
public class GasistentBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(GasistentBackendApplication.class, args);
	}

}
