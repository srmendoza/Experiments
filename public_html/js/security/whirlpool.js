var ROUNDS = 10;
var REDUCTION_POLYNOMIAL = 0x011D;

var s_SBOX =
[
	0x18, 0x23, 0xc6, 0xe8, 0x87, 0xb8, 0x01, 0x4f, 0x36, 0xa6, 0xd2, 0xf5, 0x79, 0x6f, 0x91, 0x52,
	0x60, 0xbc, 0x9b, 0x8e, 0xa3, 0x0c, 0x7b, 0x35, 0x1d, 0xe0, 0xd7, 0xc2, 0x2e, 0x4b, 0xfe, 0x57,
	0x15, 0x77, 0x37, 0xe5, 0x9f, 0xf0, 0x4a, 0xda, 0x58, 0xc9, 0x29, 0x0a, 0xb1, 0xa0, 0x6b, 0x85,
	0xbd, 0x5d, 0x10, 0xf4, 0xcb, 0x3e, 0x05, 0x67, 0xe4, 0x27, 0x41, 0x8b, 0xa7, 0x7d, 0x95, 0xd8,
	0xfb, 0xee, 0x7c, 0x66, 0xdd, 0x17, 0x47, 0x9e, 0xca, 0x2d, 0xbf, 0x07, 0xad, 0x5a, 0x83, 0x33,
	0x63, 0x02, 0xaa, 0x71, 0xc8, 0x19, 0x49, 0xd9, 0xf2, 0xe3, 0x5b, 0x88, 0x9a, 0x26, 0x32, 0xb0,
	0xe9, 0x0f, 0xd5, 0x80, 0xbe, 0xcd, 0x34, 0x48, 0xff, 0x7a, 0x90, 0x5f, 0x20, 0x68, 0x1a, 0xae,
	0xb4, 0x54, 0x93, 0x22, 0x64, 0xf1, 0x73, 0x12, 0x40, 0x08, 0xc3, 0xec, 0xdb, 0xa1, 0x8d, 0x3d,
	0x97, 0x00, 0xcf, 0x2b, 0x76, 0x82, 0xd6, 0x1b, 0xb5, 0xaf, 0x6a, 0x50, 0x45, 0xf3, 0x30, 0xef,
	0x3f, 0x55, 0xa2, 0xea, 0x65, 0xba, 0x2f, 0xc0, 0xde, 0x1c, 0xfd, 0x4d, 0x92, 0x75, 0x06, 0x8a,
	0xb2, 0xe6, 0x0e, 0x1f, 0x62, 0xd4, 0xa8, 0x96, 0xf9, 0xc5, 0x25, 0x59, 0x84, 0x72, 0x39, 0x4c,
	0x5e, 0x78, 0x38, 0x8c, 0xd1, 0xa5, 0xe2, 0x61, 0xb3, 0x21, 0x9c, 0x1e, 0x43, 0xc7, 0xfc, 0x04,
	0x51, 0x99, 0x6d, 0x0d, 0xfa, 0xdf, 0x7e, 0x24, 0x3b, 0xab, 0xce, 0x11, 0x8f, 0x4e, 0xb7, 0xeb,
	0x3c, 0x81, 0x94, 0xf7, 0xb9, 0x13, 0x2c, 0xd3, 0xe7, 0x6e, 0xc4, 0x03, 0x56, 0x44, 0x7f, 0xa9,
	0x2a, 0xbb, 0xc1, 0x53, 0xdc, 0x0b, 0x9d, 0x6c, 0x31, 0x74, 0xf6, 0x46, 0xac, 0x89, 0x14, 0xe1,
	0x16, 0x3a, 0x69, 0x09, 0x70, 0xb6, 0xd0, 0xed, 0xcc, 0x42, 0x98, 0xa4, 0x28, 0x5c, 0xf8, 0x86
];

var C0 = new ulong[256];
var C1 = new ulong[256];
var C2 = new ulong[256];
var C3 = new ulong[256];
var C4 = new ulong[256];
var C5 = new ulong[256];
var C6 = new ulong[256];
var C7 = new ulong[256];

var rc = new ulong[ROUNDS + 1];

function Whirlpool()
{
	for(var i = 0; i < 256; i++)
	{
		var v1 = s_SBOX[i];
		var v2 = mwrp(v1 << 1);
		var v4 = mwrp(v2 << 1);
		var v5 = v4 ^ v1;
		var v8 = mwrp(v4 << 1);
		var v9 = v8 ^ v1;

		C0[i] = piul(v1, v1, v4, v1, v8, v5, v2, v9);
		C1[i] = piul(v9, v1, v1, v4, v1, v8, v5, v2);
		C2[i] = piul(v2, v9, v1, v1, v4, v1, v8, v5);
		C3[i] = piul(v5, v2, v9, v1, v1, v4, v1, v8);
		C4[i] = piul(v8, v5, v2, v9, v1, v1, v4, v1);
		C5[i] = piul(v1, v8, v5, v2, v9, v1, v1, v4);
		C6[i] = piul(v4, v1, v8, v5, v2, v9, v1, v1);
		C7[i] = piul(v1, v4, v1, v8, v5, v2, v9, v1);
	}

	rc[0] = 0;

	for(var r = 1; r <= ROUNDS; r++)
	{
		var i = 8 * (r - 1);
		rc[r] = (C0[i + 0] & 0xff00000000000000) ^
				(C1[i + 1] & 0x00ff000000000000) ^
				(C2[i + 2] & 0x0000ff0000000000) ^
				(C3[i + 3] & 0x000000ff00000000) ^
				(C4[i + 4] & 0x00000000ff000000) ^
				(C5[i + 5] & 0x0000000000ff0000) ^
				(C6[i + 6] & 0x000000000000ff00) ^
				(C7[i + 7] & 0x00000000000000ff);
	}
}

function piul(b7, b6, b5, b4, b3, b2, b1, b0)//packIntoULong
{
	return  (((int)(b7) << 56) ^ ((int)(b6) << 48) ^
			((int)(b5) << 40) ^ ((int)(b4) << 32) ^
			((int)(b3) << 24) ^ ((int)(b2) << 16) ^
			((int)(b1) << 08) ^ ((int)(b0) << 00));
}

function mwrp(input)//maskWithReductionPolynomial
{
	if (input >= 0x100)
	{
		input ^= REDUCTION_POLYNOMIAL;
	}
	return input;
}

var R=10;

function processbuffer(structpointer)
{
	var i;
	var j;
	var r;
	var K;//=[];
	var block;//=[];
	var state;//=[];
	var L;//=[];
	var buffer = structpointer.buffer;
	for(i=0; i<8; i++)
	{
		block[i]=((buffer[0+i*8]) << 56)^
		((buffer[1+i*8] && 0xff) << 48)^
		((buffer[2+i*8] && 0xff) << 40)^
		((buffer[3+i*8] && 0xff) << 32)^
		((buffer[4+i*8] && 0xff) << 24)^
		((buffer[5+i*8] && 0xff) << 16)^
		((buffer[6+i*8] && 0xff) << 8)^
		((buffer[7+i*8] && 0xff) << 0);
	}
	for(i=0; i<8; i++)
	{
		state[i] = block[i] ^ (K[i] = structpointer.hash[i]);
	}
	for(r=1; r<R; r++)
	{
		L[0]=c0[(int)(K[0] >> 56) && 0Xff ]^
			 c1[(int)(K[7] >> 48) && 0xff ]^
			 c2[(int)(K[6] >> 40) && 0xff ]^
			 c3[(int)(K[5] >> 32) && 0xff ]^
			 c4[(int)(K[4] >> 24) && 0xff ]^
			 c5[(int)(K[3] >> 16) && 0xff ]^
			 c6[(int)(K[2] >> 8) && 0xff ]^
			 c7[(int)(K[1] >> 0) && 0xff ]^
			 rc[r];
		L[1]=c0[(int)(K[1] >> 56) && 0xff ]^
			 c1[(int)(K[0] >> 48) && 0xff ]^
			 c2[(int)(K[7] >> 40) && 0xff ]^
			 c3[(int)(K[6] >> 32) && 0xff ]^
			 c4[(int)(K[5] >> 24) && 0xff ]^
			 c5[(int)(K[4] >> 16) && 0xff ]^
			 c6[(int)(K[3] >> 8) && 0xff ]^
			 c7[(int)(K[2] >> 0) && 0xff ];
		L[2]=c0[(int)(K[2] >> 56) && 0xff ]^
			 c1[(int)(K[1] >> 48) && 0xff ]^
			 c2[(int)(K[0] >> 40) && 0xff ]^
			 c3[(int)(K[7] >> 32) && 0xff ]^
			 c4[(int)(K[6] >> 24) && 0xff ]^
			 c5[(int)(K[5] >> 16) && 0xff ]^
			 c6[(int)(K[4] >> 8) && 0xff ]^
			 c7[(int)(K[3] >> 0) && 0xff ];
		L[3]=c0[(int)(K[3] >> 56) && 0xff ]^
			 c1[(int)(K[2] >> 48) && 0xff ]^
			 c2[(int)(K[1] >> 40) && 0xff ]^
			 c3[(int)(K[0] >> 32) && 0xff ]^
			 c4[(int)(K[7] >> 24) && 0xff ]^
			 c5[(int)(K[6] >> 16) && 0xff ]^
			 c6[(int)(K[5] >> 8) && 0xff ]^
			 c7[(int)(K[4] >> 0) && 0xff ];
		L[4]=c0[(int)(K[4] >> 56) && 0xff ]^
			 c1[(int)(K[3] >> 48) && 0xff ]^
			 c2[(int)(K[2] >> 40) && 0xff ]^
			 c3[(int)(K[1] >> 32) && 0xff ]^
			 c4[(int)(K[0] >> 24) && 0xff ]^
			 c5[(int)(K[7] >> 16) && 0xff ]^
			 c6[(int)(K[6] >> 8) && 0xff ]^
			 c7[(int)(K[5] >> 0) && 0xff ];
		L[5]=c0[(int)(K[5] >> 56) && 0xff ]^
			 c1[(int)(K[4] >> 48) && 0xff ]^
			 c2[(int)(K[3] >> 40) && 0xff ]^
			 c3[(int)(K[2] >> 32) && 0xff ]^
			 c4[(int)(K[1] >> 24) && 0xff ]^
			 c5[(int)(K[0] >> 16) && 0xff ]^
			 c6[(int)(K[7] >> 8) && 0xff ]^
			 c7[(int)($K[6] >> 0) && 0xff ];
		L[6]=c0[(int)(K[6] >> 56) && 0xff ]^
			 c1[(int)(K[5] >> 48) && 0xff ]^
			 c2[(int)(K[4] >> 40) && 0xff ]^
			 c3[(int)(K[3] >> 32) && 0xff ]^
			 c4[(int)(K[2] >> 24) && 0xff ]^
			 c5[(int)(K[1] >> 16) && 0xff ]^
			 c6[(int)(K[0] >> 8) && 0xff ]^
			 c7[(int)(K[7] >> 0) && 0xff ];
		L[7]=c0[(int)(K[7] >> 56) && 0xff ]^
			 c1[(int)(K[6] >> 48) && 0xff ]^
			 c2[(int)(K[5] >> 40) && 0xff ]^
			 c3[(int)(K[4] >> 32) && 0xff ]^
			 c4[(int)(K[3] >> 24) && 0xff ]^
			 c5[(int)(K[2] >> 16) && 0xff ]^
			 c6[(int)(K[1] >> 8) && 0xff ]^
			 c7[(int)(K[0] >> 0) && 0xff ];
		for(j=0;j<8;j++)
		{
			K[j] = L[j];
		}
		L[0]=c0[(int)(state[0] >> 56) && 0xff ]^
			 c1[(int)(state[7] >> 48) && 0xff ]^
			 c2[(int)(state[6] >> 40) && 0xff ]^
			 c3[(int)(state[5] >> 32) && 0xff ]^
			 c4[(int)(state[4] >> 24) && 0xff ]^
			 c5[(int)(state[3] >> 16) && 0xff ]^
			 c6[(int)(state[2] >> 8) && 0xff ]^
			 c7[(int)(state[1] >> 0) && 0xff ]^
			 K[0];
		L[1]=c0[(int)(state[1] >> 56) && 0xff ]^
			 c1[(int)(state[0] >> 48) && 0xff ]^
			 c2[(int)(state[7] >> 40) && 0xff ]^
			 c3[(int)(state[6] >> 32) && 0xff ]^
			 c4[(int)(state[5] >> 24) && 0xff ]^
			 c5[(int)(state[4] >> 16) && 0xff ]^
			 c6[(int)(state[3] >> 8) && 0xff ]^
			 c7[(int)(state[2] >> 0) && 0xff ]^
			 K[1];
		L[2]=c0[(int)(state[2] >> 56) && 0xff ]^
			 c1[(int)(state[1] >> 48) && 0xff ]^
			 c2[(int)(state[0] >> 40) && 0xff ]^
			 c3[(int)(state[7] >> 32) && 0xff ]^
			 c4[(int)(state[6] >> 24) && 0xff ]^
			 c5[(int)(state[5] >> 16) && 0xff ]^
			 c6[(int)(state[4] >> 8) && 0xff ]^
			 c7[(int)(state[3] >> 0) && 0xff ]^
			 K[2];
		L[3]=c0[(int)(state[3] >> 56) && 0xff ]^
			 c1[(int)(state[2] >> 48) && 0xff ]^
			 c2[(int)(state[1] >> 40) && 0xff ]^
			 c3[(int)(state[0] >> 32) && 0xff ]^
			 c4[(int)(state[7] >> 24) && 0xff ]^
			 c5[(int)(state[6] >> 16) && 0xff ]^
			 c6[(int)(state[5] >> 8) && 0xff ]^
			 c7[(int)(state[4] >> 0) && 0xff ]^
			 K[3];
		L[4]=c0[(int)(state[4] >> 56) && 0xff ]^
			 c1[(int)(state[3] >> 48) && 0xff ]^
			 c2[(int)(state[2] >> 40) && 0xff ]^
			 c3[(int)(state[1] >> 32) && 0xff ]^
			 c4[(int)(state[0] >> 24) && 0xff ]^
			 c5[(int)(state[7] >> 16) && 0xff ]^
			 c6[(int)(state[6] >> 8) && 0xff ]^
			 c7[(int)(state[5] >> 0) && 0xff ]^
			 K[4];
		L[5]=c0[(int)(state[5] >> 56) && 0xff ]^
			 c1[(int)(state[4] >> 48) && 0xff ]^
			 c2[(int)(state[3] >> 40) && 0xff ]^
			 c3[(int)(state[2] >> 32) && 0xff ]^
			 c4[(int)(state[1] >> 24) && 0xff ]^
			 c5[(int)(state[0] >> 16) && 0xff ]^
			 c6[(int)(state[7] >> 8) && 0xff ]^
			 c7[(int)(state[6] >> 0) && 0xff ]^
			 K[5];
		L[6]=c0[(int)(state[6] >> 56) && 0xff ]^
			 c1[(int)(state[5] >> 48) && 0xff ]^
			 c2[(int)(state[4] >> 40) && 0xff ]^
			 c3[(int)(state[3] >> 32) && 0xff ]^
			 c4[(int)(state[2] >> 24) && 0xff ]^
			 c5[(int)(state[1] >> 16) && 0xff ]^
			 c6[(int)(state[0] >> 8) && 0xff ]^
			 c7[(int)(state[7] >> 0) && 0xff ]^
			 K[6];
		L[7]=c0[(int)(state[7] >> 56) && 0xff ]^
			 c1[(int)(state[6] >> 48) && 0xff ]^
			 c2[(int)(state[5] >> 40) && 0xff ]^
			 c3[(int)(state[4] >> 32) && 0xff ]^
			 c4[(int)(state[3] >> 24) && 0xff ]^
			 c5[(int)(state[2] >> 16) && 0xff ]^
			 c6[(int)(state[1] >> 8) && 0xff ]^
			 c7[(int)(state[0] >> 0) && 0xff ]^
			 K[7];
		for(j=0;j<8;j++)
		{
			state[j]=L[j];
		}
	}
	for(i=0;i<8;i++)
	{
		structpointer.hash[i]^=state[i]^block[i];
	}
}

function WHIRLPOOL_init(structpointer)
{
	structpointer.bufferBits = structpointer.bufferPos = 0;
	structpointer.buffer[0] = 0;

	for(i = 0; i < 8; i++)
	{
		structpointer.hash[i] = 0;
	}
}

function WHIRLPOOL_add(source, sourceBits, structpointer)
{
	var sourcePos = 0;
	var sourceGap = (8 - (sourceBits & 7)) & 7;
	var bufferRem = structpointer.bufferBits & 7;
	var i;
	var b;
	var carry;
	var buffer = structpointer.buffer;
	var bitLength = structpointer.bitLength;
	var bufferBits = structpointer.bufferBits;
	var bufferPos = structpointer.bufferPos;
	var value = sourceBits;
	for(i=31, carry=0;  i >= 0 && (carry != 0 || value != 0); i--)
	{
		carry += bitLength[i] + (value & 0xff);
		bitLength[i] = carry;
		carry >>= 8;
		value >>= 8;
	}
	while(sourceBits > 8)
	{
		b = ((source[sourcePos] << sourceGap) & 0xff) | ((source[sourcePos + 1] & 0xff) >> (8 - sourceGap));
		buffer[bufferPos++] |= (b >> bufferRem);

		bufferBits += 8 - bufferRem;
		if(bufferBits==512)
		{
			processBuffer(structpointer);
			bufferBits = bufferPos = 0;
		}
		buffer[bufferPos] = (b << (8 - bufferRem));
		bufferBits += bufferRem;
		sourceBits -= 8;
		sourcePos++;
	}
	if(sourceBits>0)
	{
		b = (source[sourcePos] << sourceGap) & 0xff;
		buffer[bufferPos] |= b >> bufferRem;
	}
	else
	{
		b=0;
	}
	if((bufferRem + sourceBits)<8)
	{
		bufferBits += sourceBits;
	}
	else
	{
		bufferPos++;
		bufferBits += 8 - bufferRem;
		sourceBits -= 8 - bufferRem;
		if(bufferBits==256)
		{
			processbuffer(structpointer);
			bufferBits=bufferPos=0;
		}
		buffer[bufferPos] = (b << (8 - bufferRem));
		bufferBits += sourceBits;
	}
	structpointer.bufferBits  = bufferBits;
	structpointer.bufferPos	= bufferPos;
}

function WHIRLPOOL_finalize(structpointer, result)
{
	var i;
	var buffer = structpointer.buffer;
	var bitLength = structpointer.bitLength;
	var bufferBits = structpointer.bufferBits;
	var bufferPos = structpointer.bufferPos;
	var digest = result;
	buffer[bufferPos] |= 0x80 >> (bufferBits & 7);
	bufferPos++;
	if(bufferPos>32)
	{
		processBuffer(structpointer);
		bufferPos=0;
	}
	bufferPos = 32;
	//memcpy(&buffer[WBLOCKBYTES - LENGTHBYTES], bitLength, LENGTHBYTES);
	processBuffer(structpointer);
	for(i=0; i<8;i++)
	{
		digest[0+i*8] = (structpointer.hash[i] >> 56);
		digest[1+i*8] = (structpointer.hash[i] >> 48);
		digest[2+i*8] = (structpointer.hash[i] >> 40);
		digest[3+i*8] = (structpointer.hash[i] >> 32);
		digest[4+i*8] = (structpointer.hash[i] >> 24);
		digest[5+i*8] = (structpointer.hash[i] >> 16);
		digest[6+i*8] = (structpointer.hash[i] >>  8);
		digest[7+i*8] = (structpointer.hash[i] >>  0);
	}
	structpointer.bufferBits = bufferBits;
	structpointer.bufferPos = bufferPos;
}