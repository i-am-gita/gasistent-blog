package gita.gasistent.blog.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@Configuration
@EnableAutoConfiguration
@ComponentScan({"gita.gasistent.blog.backend.mapper"})
public class GasistentBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(GasistentBackendApplication.class, args);
	}

}
