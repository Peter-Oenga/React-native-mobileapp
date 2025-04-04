package com.mobileapp;

import android.os.Bundle;
import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView; // ✅ this is the critical import

public class MainActivity extends ReactActivity {

    @Override
    protected String getMainComponentName() {
        return "mobileApp";
    }

    // ✅ Required for react-native-gesture-handler to work properly
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(null);
    }

    @Override
    protected ReactActivityDelegate createReactActivityDelegate() {
        return new ReactActivityDelegate(this, getMainComponentName()) {
            @Override
            protected ReactRootView createRootView() {
                return new RNGestureHandlerEnabledRootView(MainActivity.this); // ✅ key line
            }
        };
    }
}
