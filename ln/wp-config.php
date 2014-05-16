<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'bliss');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'youtube!');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '9D+Utvf2Z-Y[O`!vHxs(R6PiM?(Pn*/r{=1q$P9b[!.hg+TgS`KA|Otc*/OMb}qO');
define('SECURE_AUTH_KEY',  'k#Ii!-dl)O%dFO7|f4l}d8W{At_LJ;Q.&-_Ov|w^%Icuxc@6n)tL_/nz*_+&Rq|O');
define('LOGGED_IN_KEY',    '%=-Xx+C{buVO2gR?[++D%J/C#!B9>B0PT>Ed]+]:wt0[@es4^hd)+>-^{k9L_QN.');
define('NONCE_KEY',        '12B|E~sowD&}&!{8- 3gV+a)T^EV2lp9(b6PMU70#Ppg|nl| (*Tj-baRX8~-ZO~');
define('AUTH_SALT',        '=CFTN)Nl`nv;^HoOwBU6g@3}|RGhRbE]UPp$Hwm3|!;U1zwR)@}zk+s+mgBL7V3]');
define('SECURE_AUTH_SALT', 'y)/`lCQ<(}o15#e[(iea!WADR@,avFn,XJL`|5Llo5PP*:GQ)HbXpeo9Bl=y,m_3');
define('LOGGED_IN_SALT',   ':`Xe#i3A8.c|npvH<$9-7 Ng6aXRqi)yQ=E&=k>L?/flr-T8Nz]?B2_5I^j@VHe,');
define('NONCE_SALT',       ']iHL)Gzs_kf,+2o|Y?]-`XXNIZuGqjylz}KWp>``Qq%ds@ZF2X~LHV,J%_]nHJ<D');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress. A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de_DE.mo to wp-content/languages and set WPLANG to 'de_DE' to enable German
 * language support.
 */
define('WPLANG', '');

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
   define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
