package com.stickerswpp;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableArray;

public class StickerManager extends ReactContextBaseJavaModule {

    public StickerManager(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @ReactMethod
    public void sendToWhatsApp(ReadableArray stickers) {

    }

    @Override
    public String getName() {
        return "StickerManager";
    }
}