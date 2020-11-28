package com.project.service.kafka.serde;

import org.apache.kafka.common.serialization.Deserializer;
import org.apache.kafka.common.serialization.Serde;
import org.apache.kafka.common.serialization.Serializer;

import java.util.Map;

import com.project.service.kafka.serde.CommentsSerializer;
import com.project.service.kafka.serde.CommentsDeserializer;

public class CommentsSerde<Comments> implements Serde<Comments> {
    private final Serializer serializer = new CommentsSerializer();
    private final Deserializer deserializer = new CommentsDeserializer();

    @Override
    public void configure(Map<String, ?> configs, boolean isKey) {
        this.serializer.configure(configs, isKey);
        this.deserializer.configure(configs, isKey);
    }

    @Override
    public void close() {
        this.serializer.close();
        this.deserializer.close();
    }

    @Override
    public Serializer<Comments> serializer() {
        return serializer;
    }

    @Override
    public Deserializer<Comments> deserializer() {
        return deserializer;
    }
}
