//package gita.gasistent.blog.backend.config;
//
//import com.mongodb.client.MongoClient;
//import com.mongodb.client.MongoDatabase;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.core.env.Environment;
//import org.springframework.data.mongodb.MongoDatabaseFactory;
//import org.springframework.data.mongodb.core.MongoTemplate;
//import org.springframework.data.mongodb.core.SimpleMongoClientDatabaseFactory;
//import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
//import org.springframework.stereotype.Component;
//
//@Component
//public class MongoConfig {
//
//    private final MongoDatabaseFactory mongo;
//
//    @Autowired
//    public MongoConfig(MongoDatabaseFactory mongo) {
//        this.mongo = mongo;
//    }
//
//    // ...
//
//    public void example() {
//        MongoDatabase db = mongo.getMongoDatabase();
//        // ...
//    }
//}
